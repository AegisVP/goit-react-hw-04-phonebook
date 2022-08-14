import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Common/Box.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFormFormik } from 'components/ContactFormFormik/ContactFormFormik';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { FilterForm } from 'components/Filter/Filter';
import { FormikSelect } from 'components/FormikSelect/FormikSelect';

const LS_CONTACTS_KEY = 'hw_contacts_phonebook';
const LS_IS_FORMIK_SELECTED = 'hw_contacts_isFormikSelected';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-84' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-88-76' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-98' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-98-76' },
    ],
    formikSelected: false,
    filter: '',
    editId: '',
    editName: '',
    editNumber: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(LS_CONTACTS_KEY);
    const parsedContacts = savedContacts ? JSON.parse(savedContacts) : this.state.contacts;

    const isFormikSelected = localStorage.getItem(LS_IS_FORMIK_SELECTED)?.toString() === 'true';

    this.setState({
      contacts: parsedContacts ? parsedContacts : this.state.contacts,
      formikSelected: isFormikSelected,
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts === this.state.contacts) return;

    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(this.state.contacts));
  }

  onFormikSelect = ({ target: { checked } }) => {
    localStorage.setItem(LS_IS_FORMIK_SELECTED, checked);
    this.setState({ formikSelected: checked });
  };

  onAddContact = ({ id, name, number }) => {
    name = name.trim();
    const normalizedName = name.toLocaleLowerCase();

    if (id !== '' && id !== null) {
      this.onDeleteContact(id);
    } else {
      if (this.state.contacts.some(({ name }) => name.toLocaleLowerCase() === normalizedName)) {
        window.alert('This name already exists in the list!');
        return;
      }
    }

    id ||= nanoid();
    this.onSaveContact({ id, name, number });
    return id;
  };

  onEditContact = id => {
    const { name, number } = this.state.contacts.find(({ id: cid }) => id === cid);
    this.setState({ editId: id, editName: name, editNumber: number });
  };

  onSaveContact = ({ id, name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, number }],
    }));
    this.setState({ editId: '', editName: '', editNumber: '' });
  };

  onResetForm = () => {
    this.setState({ editId: '', editName: '', editNumber: '' });
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
    if (this.state.contacts.length === 1) this.clearFilterField();
  };

  onFilterContacts = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  clearFilterField = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { filter, contacts, editId, editName, editNumber } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts
      .filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
      .sort((a, b) => a.name.localeCompare(b.name));

    return (
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column">
          <Section>
            <FormikSelect isSelected={this.state.formikSelected} onFormikSelect={this.onFormikSelect} />
          </Section>
          <Section title="Contact info">
            {this.state.formikSelected ? (
              <ContactFormFormik
                editId={editId}
                editName={editName}
                editNumber={editNumber}
                onSubmit={this.onAddContact}
                onResetForm={this.onResetForm}
              />
            ) : (
              <ContactForm
                editId={editId}
                editName={editName}
                editNumber={editNumber}
                onSubmit={this.onAddContact}
                onResetForm={this.onResetForm}
              />
            )}
          </Section>
          {this.state.contacts.length > 0 && (
            <Section>
              <FilterForm
                filterValue={this.state.filter}
                onClear={this.clearFilterField}
                onChange={this.onFilterContacts}
              />
            </Section>
          )}
        </Box>

        {this.state.contacts.length > 0 && (
          <Box display="flex" flexDirection="column">
            <Section title="Contact list" height="100%">
              <ListOfContacts
                onEditContact={this.onEditContact}
                onDeleteContact={this.onDeleteContact}
                contacts={filteredContacts}
              ></ListOfContacts>
            </Section>
          </Box>
        )}
      </Box>
    );
  }
}
