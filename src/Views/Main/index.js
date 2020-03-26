import React, { Component } from "react";

import { Title, Cont, Card, SendButton, MyInput } from "./styles";

import { TextField } from '@material-ui/core';

import PersonItem from '../../component/PersonItem';

import CakeIcon from '@material-ui/icons/Cake';

import PersonAddIcon from '@material-ui/icons/PersonAdd';

import IconButton from "@material-ui/core/IconButton";


class Main extends Component{
  state = {
    persons: ["Marcelo", "Duda", "Pedro"],
    newPerson: '',
  };

  componentDidMount() {
    const list = localStorage.getItem('persons');

    if(list) {
      this.setState({ persons: JSON.parse(list) });
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState !== this.state.persons) {
      localStorage.setItem('persons', JSON.stringify(this.state.persons));
    }
  }

  handleInputChange = e => {
    this.setState({newPerson: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({persons: [...this.state.persons, this.state.newPerson],
      newPerson: '',
    });
  }

  handleDelete = person => {
    this.setState({
      persons: this.state.persons.filter(item => item !== person),

    })
  }

  render() {
    return (
      <>
      <Card>
      <Title>Lista de Aniversariantes do mês <CakeIcon color="secundary" style={{ fontSize: 50 }}/></Title>
        <Cont>
        <ul>
          {
            this.state.persons.map(item =>(
            <PersonItem
              key = {item}
              person = {item}
              onDelete = {() => this.handleDelete(item)}
            />
            ))}
        </ul>
        <br/>
        <form onSubmit={this.handleSubmit}>
        <TextField
          label="Digite um nome"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newPerson}
        />
        <IconButton onClick={this.handleSubmit} aria-label="salvar">
          <PersonAddIcon type="button" style={{ fontSize: 40 }}/>
      </IconButton>
        </form>
        </Cont>

      </Card>
      </>
    );
  }
}

export default Main;