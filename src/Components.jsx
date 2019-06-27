import React from 'react';
import Input from './common/Input';
import Textarea from './common/Textarea';
import InputRadio from './common/InputRadio';
import Checkbox from './common/Checkbox';

import './Components.scss';

const Components = () => {
  return (
    <div className="Components">
      <div>
        <h1>Titre H1</h1>
        <h2>Titre H2</h2>
        <h3>Titre H3</h3>
      </div>
      <hr />
      <div>
        <div className="bloc primaryColor"><span />Couleur primaire</div>
        <div className="bloc secondaryColor"><span />Couleur secondaire</div>
        <div className="bloc greyColor"><span />Couleur grise</div>
        <div className="bloc darkgreyColor"><span />Couleur gris foncé</div>
      </div>
      <hr />
      <div>
        <Input label="Input" />
        <br />
        <Textarea label="Textarea" cols="100" rows="5" />
        <br />
        <InputRadio id="radio1" name="radio1" label="Radio Button 1" />
        <InputRadio id="radio2" name="radio1" label="Radio Button 2" />
        <br />
        <Checkbox id="checkbox1" name="cb1" label="Checkbox 1" />
        <br />
        <Checkbox id="checkbox2" name="cb2" label="Checkbox 2 checked" checked />
      </div>
      <hr />
      <div>
        <button type="button">Bouton par défaut</button>
        <br />
        <button type="button" className="btn-success">Bouton succès</button>
        <br />
        <button type="button" className="btn-danger">Bouton danger</button>
        <br />
        <button type="button" className="btn-cancel">Bouton annuler</button>
      </div>
    </div>
  );
}

export default Components;