import React from 'react';
import './styles.css';
import Cubo from '../../assets/img/photo.JPG';
import Equipe from '../../assets/img/equipe.JPG';

function History() {
  return (
    <div className="container_card">
      <div className="card">
        <div className="imgBx">
        <h3>Compartilhando conhecimentos</h3>
          <img src={Cubo}/>
        </div>
        <div className="details">
          <h3>Compartilhando conhecimentos</h3>
          <p>Durante tres anos seguidos atuei ensinando tecnicas de cubo magico para as novas turmas que entravam participando da comunidade e passando o conhecimento a diante.</p>
        </div>
      </div>

      <div className="card">
        <div className="imgBx">
        <h3>Organização Campeonato</h3>
          <img src={Cubo}/>
        </div>
        <div className="details">
          <h3>Cubo Mágico</h3>
          <p>Obtive o privilegio de poder organizar o segundo maior campeonato de cubo magico do brasil com 5 modalidades diferentes e 163 participantes</p>
        </div>
      </div>
    
      <div className="card">
        
        <div className="imgBx">
        <h3>Campeonato Cubo Mágico</h3>
          <img src={Equipe}/>
        </div>
        <div className="details">
          <h3>Cubo Mágico</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    
    </div>
        
        
  )};

export default History;