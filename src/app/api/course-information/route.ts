import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter} from '../../services/nodemailer';
import farvalleLogo from '../../../../public/farvalle-logo.png'

export async function POST(request: Request) {

    const {nome, email, telefone, text, curso} = await request.json()
    console.log(nome, email, telefone, text, curso) 
    // PRECISA COLOCAR A URL DA LOGO NO HTML
    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: '🗣️ Lead Informação | Nova mensagem 🗣️',
           cc: 'ouvidoria@fazag.edu.br',
           //bcc: 'caroll_moutinho@hotmail.com',
           text: text,
           replyTo: email,
           html: `
           <div style=" padding: 50px 10px;
           background: #3f4c41;
           font-family:'Open Sans','Roboto','Helvetica Neue','Helvetica','Arial', sans-serif;
           color: #757575;">
               <div style="max-width: 600px;
               margin: auto;
       padding: 15px 30px 25px 30px;
       background: white;
       border-radius: 4px;
       text-align: justify;">
               <div style="
       display: block;
       text-align: center;
       margin-top: 1rem;
       margin-bottom: 1rem;">
               <img src="${farvalleLogo}" alt="Logo da Farvalle" width=150px />
   
               <h1>Lead Informação</h1>
               </div>
               
               <p><strong>Nome: </strong>
               <br/>${nome}</p><hr />
   
               <p><strong>E-mail: </strong>
               <br/>${email}</p><hr />
   
               <p><strong>Telefone: </strong>
               <br/>${telefone}</p><hr />

                <p><strong>Curso: </strong>
               <br/>${curso}</p><hr />
               </div>
   
                <div style="
               margin-top: 3rem;
               width: 100%;
               height: 50px;
               text-align: center;
               ">
                    <a href="https://wa.me/${telefone}?text=Ol%C3%A1!" style="
                        cursor: pointer;
                        text-decoration: none;
                        text-align: center;
                        background: #a15f40;
                        padding: 1rem;
                        border-radius: 50px;
                        width: 45%;
                        color: #fff;
                        font-weight: 600;
                        font-size: 1rem;
                        transition: .2s;
                        border: none;
                    ">Entrar em contato (Whatsapp)</a>
               </div>
           </div>`,
           
        })
        return Response.json({success: true}, {status: 200})
       }catch(err){
           console.log(err)
           return Response.json({err}, {status: 400})
       }




return Response.json({error: 'Bad Request'}, {status: 400})
}