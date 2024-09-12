import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/minhaFoto.jpg'

export default function SobreMim () {
    return (
        <PostModelo
            fotoCapa = {fotoCapa}
            titulo = "Sobre mim"
        >
            <h3 className = {styles.subtitulo}>
                Olá, eu sou o Vitor!
            </h3>
            <img
                src = {fotoSobreMim}
                alt = "Foto do Vitor no espelho"
                className = {styles.fotoSobreMim}
            />
            <p className = {styles.paragrafo}>
                Tudo bem? Eu sou aluno de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className = {styles.paragrafo}>
                Minha história com programação começou por acaso. Eu havia terminado a escola e ainda não sabia direito o que queria prestar de faculdade. Foi ai que conversei com um amigo da minha mãe, que era da área de TI. Ele me recomendou alguns cursos mas enfatizou que seria legal fazer Engenharia da Computação por conta do título de engenheiro que conta muito pro mercado.
                Foi ai que comecei a faculdade na área.
            </p>
            <p className = {styles.paragrafo}>
                Após começar a faculdade, comecei a perceber que o curso tinha muitas outras matérias de engenharia no geral, mas até então, nada de ver conteúdo sobre computação. Passaram-se alguns semestres e consegui um estágio, ainda não era de programação, mas foi quando comecei a descobrir algumas áreas interessantes de tecnologia que podia me interessar.
            </p>
            <p className = {styles.paragrafo}>
                Nesse estágio, conheci pessoas legais que começaram a gostar do meu esforço e viram que de fato eu estava gostando da área, então foi ai que ganhei uma oportunidade de emprego na área.
            </p>
            <p className = {styles.paragrafo}>
                Nesse novo emprego comecei a ver mais sobre programação, onde resolvi me aprofunar em JavaScript por conta de uma demanda de um sistema que estava em desenvolvimento. Nesse sistema era utilizado o React, onde exige conhecimentos sobre JavaScript, por isso comecei aprendendo sobre essa linguagem.
            </p>
            <p className = {styles.paragrafo}>
                Agora o desafio é grande, aprender sobre o React o mais rápido possível, para conseguir atender a demanda desse sistema em desenvolvimento. Com isso, estou bastante focado nos estudos, com o intuito de evoluir o meu conhecimento e me aprimorar cada vez mais para o mercado de trabalho.
            </p>
        </PostModelo>
    )
}