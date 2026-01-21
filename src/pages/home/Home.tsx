import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde ao Blog da Nay!
                        </h2>
                        <p className="text-x1">
                            Expresse suas ideias, compartilhe suas histórias e conecte-se com uma comunidade apaixonada por conhecimento e criatividade.
                        </p>
                        <div className="flex justify-aroun gap-4">
                            
                            <ModalPostagem />

                        </div>

                    </div>
                    <div className="flex justify-center">
                        <img
                            src="http://i.imgur.com/fyfri1v.png"
                            alt="Imagem Pagina Home"
                            className="w-2/3"
                        />
                    </div>
                </div>

            </div>

             <ListaPostagens />
        </>
    )
}

export default Home