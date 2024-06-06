import React from "react";
import unilasalle from "./unilasalle.png";
import "./about.css";


const About = () => {
 return (
   <div>
    <h1 style={{textAlign:"center", marginBottom:'50px'}}>Sobre Nós</h1>
    <div style={{textAlign:"center"}}>
    <img src={unilasalle} alt="unilasalle" className="logo"/>
    <h3>Atividade Integradora V</h3>
    </div>
    <div className="cont-inf">
    <div className="divInt">
        <h2>Integrantes</h2>
        
        <p style={{marginBottom: "10px", marginTop: "10px"}}>0050022047 ● Camila Ribeiro Merino</p>
        <p style={{marginBottom: "10px"}}>0050022050 ● Giselle Pires de Souza</p>
        <p style={{marginBottom: "10px"}}>0050022309 ● Giselle Fagundes Falcão Ferreira</p>
        <p style={{marginBottom: "10px"}}>0050022230 ● Gabriela Mendes da Motta</p>
        <p style={{marginBottom: "10px"}}>0050022143 ● Isabela Ferreira Taborda</p>
        <p style={{marginBottom: "10px"}}>0050022046 ● Francisco Jose da Cruz Moltedo</p>
        <p style={{marginBottom: "10px"}}>0050019144 ● Leonardo da Silva Martins</p>
        <p style={{marginBottom: "10px"}}>0050018893 ● Lucas Silva de Oliveira</p>
        <p style={{marginBottom: "10px"}}>0050020389 ● Thayene Jannie da Silva Caetano</p>
        <p style={{marginBottom: "10px"}}>0050019599 ● Rubia Cardoso Genn de Campos</p>
        
    </div>
    <div className="divWho">
        <h2>Quem Somos?</h2>
        
        <p style={{marginBottom: "10px",marginTop:"20px"}}>&nbsp;&nbsp; Somos alunos do curso de Nutrição da Unilasalle | Rio de Janeiro, e estamos unindo esforços com colegas dos cursos de Arquitetura e Sistema de Informação para um propósito comum: promover a conscientização sobre a importância da alimentação saudável na infância.</p>

        <p style={{marginBottom: "10px"}}>&nbsp;&nbsp; Entendemos que a nutrição adequada desempenha um papel vital no desenvolvimento das crianças, moldando não apenas sua saúde atual, mas também seu bem-estar futuro. Como futuros profissionais de saúde, estamos comprometidos em compartilhar nosso conhecimento e inspirar mudanças positivas nas comunidades em que vivemos.</p>

        <p style={{marginBottom: "10px"}}>&nbsp;&nbsp; Nosso Instagram é uma plataforma onde compartilhamos informações e recursos sobre nutrição infantil, destacando por que é tão importante e como podemos incentivar bons hábitos alimentares desde cedo. Acreditamos que cada postagem, cada dica e cada receita compartilhada pode fazer a diferença na vida de uma criança e de sua família.</p>

        <p style={{marginBottom: "10px"}}>&nbsp;&nbsp; Ao unir nossas habilidades e conhecimentos em nutrição, arquitetura e tecnologia da informação, estamos criando uma rede de apoio abrangente para aqueles que desejam aprender mais sobre alimentação saudável na infância e como implementá-la em suas próprias vidas.</p>

        <p style={{marginBottom: "10px"}}>&nbsp;&nbsp; Junte-se a nós nessa jornada de promoção da saúde e bem-estar das crianças, pois acreditamos que, juntos, podemos construir um futuro mais saudável e vibrante para as gerações vindouras.</p>
        
    </div>
    
    </div>
   </div>
 );
};

export default About;