import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: Request){
    const resposta = await req.json()
    console.log('Webhook Recebido: ', resposta)

    
      revalidateTag("prismic");
    
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }
