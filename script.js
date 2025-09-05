
    // Toggle mobile menu
    function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("active");
    }

    // Get elements
    const langIcon = document.getElementById("langIcon");
    const langDropdown = document.getElementById("langDropdown");
    const userIcon = document.getElementById("userIcon");
    const userDropdown = document.getElementById("userDropdown");

    // Toggle language dropdown
    langIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("show");
      userDropdown.classList.remove("show"); // close user dropdown if open
    });

    // Toggle user dropdown
    userIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle("show");
      langDropdown.classList.remove("show"); // close language dropdown if open
    });

    // Close both dropdowns when clicking outside
    window.addEventListener("click", () => {
      langDropdown.classList.remove("show");
      userDropdown.classList.remove("show");
    });

    // Function to change language
    function changeLanguage(lang) {
      if (lang === 'en') {
        alert("Language changed to English");
      } else if (lang === 'ps') {
        alert("ژبه پښتو ته بدله شوه (Pashto selected)");
      } else if (lang === 'pr') {
        alert("زبان به فارسی تغییر یافت (Persian selected)");
      }

      // Close the dropdown after selecting
      langDropdown.classList.remove("show");
    }