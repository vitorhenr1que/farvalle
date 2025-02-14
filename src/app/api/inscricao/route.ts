
import { prisma } from '../../services/prisma'

export async function POST(req: Request){

    const {nome, city, conheceu, course, email, ingresso, tel} = await req.json()

    try{
        const novoinscrito = await prisma.inscricao.create({
            data: {
                nome: nome,
                cidade: city,
                conheceu: conheceu,
                curso: course,
                email: email,
                ingresso: ingresso,
                telefone: tel
            }
        })
    
        return Response.json(novoinscrito, {status: 200})
    } catch(e){
        return Response.json({error: e}, {status: 400})
    }
}