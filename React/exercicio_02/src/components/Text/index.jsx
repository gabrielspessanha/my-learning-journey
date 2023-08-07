import Button from "../Button"

export default function Text(props){
  return (
    <div>
      <h1 style={{marginBottom: "2rem"}}>{props.title}</h1>
      <p  style={{paddingBottom: "1rem"}}
      >Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
      <Button />
    </div>
    
  )
}


    