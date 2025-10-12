
    function toggleDropdown(id) {
        // Obtiene el elemento desplegable por su ID
        const dropdown = document.getElementById(id);
        
        // Alterna (quita si existe, añade si no existe) la clase 'show'
        dropdown.classList.toggle("show");
    }

    // Opcional: Cerrar el menú si el usuario hace clic fuera de él
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-title')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
