import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({allPokemon, setAllPokemon}) {

  const [formData, setFormData] = useState({name: '', hp: '', sprites: {front: '', back: ''}})

  function updateName(newName) {
    setFormData({...formData, name: newName})
  }

  function updateHp(newHp) {
    setFormData({...formData, hp: newHp})
  }

  function updateFrontImg(newImg) {
    setFormData({...formData, sprites: {...formData.sprites, front: newImg}})
  }

  function updateBackImg(newImg) {
    setFormData({...formData, sprites: {...formData.sprites, back: newImg}})
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          fetch('http://localhost:3001/pokemon', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          })
          .then(res => {setAllPokemon([...allPokemon, formData])});
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={event => {updateName(event.target.value)}} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={event => {updateHp(event.target.value)}} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={event => {updateFrontImg(event.target.value)}}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid onChange={event => {updateBackImg(event.target.value)}}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
