function togglePasswordVisibility(){var s=document.getElementById("password"),e=document.getElementById("toggleIcon");"password"===s.type?(s.type="text",e.classList.remove("fa-eye"),e.classList.add("fa-eye-slash")):(s.type="password",e.classList.remove("fa-eye-slash"),e.classList.add("fa-eye"))}