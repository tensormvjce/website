<script>
    document.addEventListener("DOMContentLoaded", function() {
        const logoElement = document.querySelector(".logo");

        // Add hover event listener to the logo
        logoElement.addEventListener("mouseenter", function() {
            // Add the 'opened' class to keep panels visible after the first hover
            logoElement.classList.add("opened");
        });
    });
</script>
