const getNotes = () =>
  fetch("/api/notes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

const saveNotes = (note) =>
  fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });

const deleteNotes = (id) =>
  fetch("/api/notes/${id}", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
