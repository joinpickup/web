import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {   
    const url = request.nextUrl.clone()   
    if (url.pathname === '/paint-night') {
      url.pathname = '/collective/events/e/paint-night-with-a-twist'
      return NextResponse.redirect(url)   
    }
  }
  