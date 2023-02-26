const userForm = document.getElementById('user-form')

const saveUserForm = (event) => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const dob = document.getElementById('dob').value
  const acceptedTC = document.getElementById('acceptTerms').checked

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTC
  }
  userEntries.push(entry)
  localStorage.setItem('user-entries', JSON.stringify(userEntries))
  displayEntries()
}

const retrieveEntries = () => {
  let entries = localStorage.getItem('user-entries')
  if (entries) entries = JSON.parse(entries)
  else entries = []
  return entries
}

const userEntries = retrieveEntries()

const displayEntries = () => {
  const entries = retrieveEntries()
  const tableEntries = entries
    .map((_entry) => {
      const nameCell = `<td class="border px-4 py-2 ">${_entry.name}</td>`
      const emailCell = `<td class="border px-4 py-2 ">${_entry.email}</td>`
      const passCell = `<td class="border px-4 py-2 ">${_entry.password}</td>`
      const dobCell = `<td class="border px-4 py-2 ">${_entry.dob}</td>`
      const termsCell = `<td class="border px-4 py-2 ">${_entry.acceptedTC}</td>`

      const row = `<tr>${nameCell} ${emailCell} ${passCell} ${dobCell} ${termsCell}</tr>`
      return row
    })
    .join('\n')

  const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${tableEntries}</table>`

  const details = document.getElementById('user-entries')
  details.innerHTML = table
}

userForm.addEventListener('submit', saveUserForm)
displayEntries()
