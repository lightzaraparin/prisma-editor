import { YDocProvider } from "app/multiplayer/ydoc-context";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";
import { prisma } from "~/server/db";
import Panels from "./components/panels";
import { SchemaHeader } from "./components/schema-header";
import { getSchemaAsUpdate } from "./doc-utils";
import { redirect } from "next/navigation";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

const demoRoomId = -1;

const Schema = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { token: string };
}) => {
  try {
    const id = +params.id;
    const isDemoRoom = id === demoRoomId;
    const session = await getServerSession(authOptions);
    if (!session && !isDemoRoom) {
      redirect("/api/auth/signin");
    }

  let doc = await prisma.schema.findUnique({
    where: { id },
    include: {
      shareSchema: {
        select: {
          id: true,
          sharedUsers: { select: { id: true } },
          permission: true,
          token: true,
        },
      },
    },
  });

  let isSchemaSharedWith = false;

  const isOwner = doc?.userId === session?.user.id || isDemoRoom;
  isSchemaSharedWith =
    isSchemaSharedWith ||
    !!doc?.shareSchema?.sharedUsers
      .map((u) => u.id)
      .includes(session?.user.id || "-");

  if (doc?.shareSchema && searchParams.token === doc.shareSchema.token) {
    isSchemaSharedWith = true;
    await prisma.shareSchema.update({
      data: { sharedUsers: { connect: { id: session?.user.id } } },
      where: { id: doc.shareSchema.id },
    });
  }

  if (!isOwner && !isSchemaSharedWith) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Restricted
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You don't have permission to view this schema. Please contact the schema owner for access.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-evelan-primary text-white rounded-lg hover:bg-evelan-accent transition-colors"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    );
  }

  if (!doc && isDemoRoom) {
    await prisma.schema.create({
      data: {
        id: id,
        title: "Demo",
        userId: "clgkzdihb000056y0oe80qo5s", // demo user
        YDoc: getSchemaAsUpdate(),
      },
    });
    doc = await prisma.schema.findUnique({
      where: { id },
      include: {
        shareSchema: {
          select: {
            id: true,
            sharedUsers: { select: { id: true } },
            permission: true,
            token: true,
          },
        },
      },
    });
  }

  if (!doc) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Schema Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The requested schema could not be found. It may have been deleted or moved.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-evelan-primary text-white rounded-lg hover:bg-evelan-accent transition-colors"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    );
  }

  if (!doc.YDoc) {
    doc = await prisma.schema.update({
      data: { YDoc: getSchemaAsUpdate(doc.schema) },
      where: { id },
      include: {
        shareSchema: {
          select: {
            id: true,
            sharedUsers: { select: { id: true } },
            permission: true,
            token: true,
          },
        },
      },
    });
  }

    return (
      <div className="h-screen overflow-hidden">
        <YDocProvider
          yDocUpdate={doc.YDoc!}
          room={id}
          isViewOnly={!isOwner && doc.shareSchema?.permission === "VIEW"}
        >
          <SchemaHeader />
          <Panels />
        </YDocProvider>
      </div>
    );
  } catch (error) {
    console.error('Error loading schema:', error);
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Authentication Required
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Please ensure you are signed in to access this schema. If you received a shared link, make sure to open it in the same browser where you are logged in.
          </p>
          <div className="space-y-3">
            <a 
              href="/api/auth/signin" 
              className="inline-flex items-center px-4 py-2 bg-evelan-primary text-white rounded-lg hover:bg-evelan-accent transition-colors"
            >
              Sign In
            </a>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p>Or</p>
            </div>
            <a 
              href="/" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Return to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Schema;
