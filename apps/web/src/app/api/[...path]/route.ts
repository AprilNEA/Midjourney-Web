import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

interface fetchErrorCause {
  error: number;
  code: string;
  syscall: string;
  address: string;
  port: number;
}

const handler = async (
  req: NextRequest,
  { params }: { params: { path: string[] } }
) => {
  const url = `${BACKEND_URL}/${params.path.join("/")}`;
  console.log("[Proxy]: ", url);
  try {
    return await fetch(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });
  } catch (e) {
    if (e instanceof TypeError) {
      const c = e.cause as fetchErrorCause;
      switch (c.code) {
        case "ECONNREFUSED":
          return NextResponse.json(
            {
              status: false,
              msg: `Check your backend server, address: ${c.address}:${c.port}`,
            },
            { status: 500 }
          );
        default:
          return NextResponse.json(
            { status: false, msg: `Something went wrong: ${e}` },
            { status: 500 }
          );
      }
    }
  }
};

export {
  handler as GET,
  handler as POST,
  handler as PATCH,
  handler as PUT,
  handler as DELETE,
};
