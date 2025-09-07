// Navbar active link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Note Taking App
    function loadNotes() {
      const notes = JSON.parse(localStorage.getItem('notes') || '[]');
      const notesList = document.getElementById('notes-list');
      notesList.innerHTML = '';
      notes.forEach((note, idx) => {
        const li = document.createElement('li');
        li.className = 'note-item';
        li.innerHTML = `
          <span>${note}</span>
          <button class="delete-note" data-idx="${idx}">Delete</button>
        `;
        notesList.appendChild(li);
      });
    }
    document.getElementById('add-note-btn').onclick = function() {
      const input = document.getElementById('note-input');
      const note = input.value.trim();
      if (!note) return;
      const notes = JSON.parse(localStorage.getItem('notes') || '[]');
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      input.value = '';
      loadNotes();
    };
    document.getElementById('notes-list').onclick = function(e) {
      if (e.target.classList.contains('delete-note')) {
        const idx = e.target.getAttribute('data-idx');
        const notes = JSON.parse(localStorage.getItem('notes') || '[]');
        notes.splice(idx, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
      }
    };
    loadNotes();

    // Product Page
    const products = [
      { name: "Laptop", price: 60000 },
      { name: "Smartphone", price: 25000 },
      { name: "Headphones", price: 2000 },
      { name: "Keyboard", price: 1500 },
      { name: "Monitor", price: 12000 },
      { name: "Mouse", price: 800 }
    ];
    function renderProducts(list) {
      const container = document.getElementById('product-list');
      container.innerHTML = '';
      list.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `<h4>${prod.name}</h4><p>₹${prod.price}</p>`;
        container.appendChild(div);
      });
    }
    function sortAndRender() {
      let sorted = [...products];
      const sortValue = document.getElementById('sort-select').value;
      if (sortValue === 'name-az') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortValue === 'name-za') {
        sorted.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortValue === 'price-lowhigh') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortValue === 'price-highlow') {
        sorted.sort((a, b) => b.price - a.price);
      }
      renderProducts(sorted);
    }
    document.getElementById('sort-select').onchange = sortAndRender;
    sortAndRender();

    // Contact Form
    document.getElementById('contact-form').onsubmit = function(e) {
      e.preventDefault();
    //   document.getElementById('contact-success').textContent = "Thank you for contacting me!";
    alert("Thank you for contacting me!");
      this.reset();
    };