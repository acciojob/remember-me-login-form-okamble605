 document.addEventListener("DOMContentLoaded", function() {
            const savedUsername = localStorage.getItem('username');
            const savedPassword = localStorage.getItem('password');

            if (savedUsername && savedPassword) {
                document.getElementById('existing').style.display = 'block';
                document.getElementById('existing').addEventListener('click', function() {
                    alert(`Logged in as ${savedUsername}`);
                });
            }

            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;
                const rememberMe = document.getElementById('checkbox').checked;

                if (rememberMe) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }
                alert(`Logged in as ${username}`);
            });
        });