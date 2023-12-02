function createSection() {
  var newSection = document.createElement('div');
  newSection.className = 'dynamic-section';
  newSection.innerHTML = `
    <p>این یک متن جدید است!</p>
    <button class="editBtn">ویرایش</button>
    <button class="deleteBtn">حذف</button>
  `;

  var content = document.querySelector('.content');
  content.appendChild(newSection);

  var editBtn = newSection.querySelector('.editBtn');
  var deleteBtn = newSection.querySelector('.deleteBtn');

  updateCount();

  editBtn.addEventListener('click', function() {
    editSection(newSection);
  });

  deleteBtn.addEventListener('click', function() {
    deleteSection(newSection);
  });
}

function editSection(section) {
  var content = prompt('محتوا خود را ویرایش کنید:', section.querySelector('p').textContent);
  if (content !== null) {
    section.querySelector('p').textContent = content;
  }
}

function deleteSection(section) {
  if (confirm('از حذف این مورد مطمئن هستید؟')) {
    section.remove();
  }
  updateCount();
}

function updateCount() {
  var content = document.querySelector('.content');
  var count = content.querySelectorAll('.dynamic-section').length;
  var countDisplay = document.querySelector('#sectionCount');
  countDisplay.textContent = 'تعداد ردیف ها: ' + count;
}

document.getElementById('addSectionBtn').addEventListener('click', function() {
  createSection();
});


window.addEventListener('scroll', function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    createSection();
  }
});

window.addEventListener('resize', function() {
  createSection();
});

