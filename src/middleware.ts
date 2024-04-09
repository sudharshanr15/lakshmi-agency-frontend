import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { authorize_user } from "@/lib/authorize"
// import axios from "axios";

export async function middleware(request: NextRequest){
    let authenticated = await authorize_user()

    if(!authenticated && !(request.nextUrl.pathname == "/")){
        return NextResponse.redirect( new URL("/?auth=" + authenticated, request.url))
    }else if(authenticated && !request.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect( new URL("/dashboard?auth=" + authenticated, request.url))
    }
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|image).*)',
    ],
  }