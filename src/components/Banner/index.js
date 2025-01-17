import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minhaFoto.jpg'

export default function Banner () {
    return (
        <div className = {styles.banner}>
            <div className = {styles.apresentacao}>
                <h1 className = {styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className = {styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou o Vitor Araújo, aprendiz de Front-end da Alura.
                    Aqui compartilho meus aprendizados do curso de React, espero que gostem :)
                </p>
            </div>

            <div className = {styles.imagens}>
                <img
                    className = {styles.circuloColorido}
                    src= {circuloColorido}
                    aria-hidden = {true}
                />
                <img
                    className = {styles.minhaFoto}
                    src = {minhaFoto}
                    alt='Foto do Vitor no espelho'
                />
            </div>
        </div>
    )
}