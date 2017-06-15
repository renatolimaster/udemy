console.log('Starting notes.js');

let addNote = (title, body) => {
  console.log('Adding note', title, body);
};

let getAll = () => {
  console.log('Getting all notes');
};

let removeNote = (title) => {
  console.log('Removing notes', title);
};

let getNote = (title) => {
  console.log('Getting note', title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
}