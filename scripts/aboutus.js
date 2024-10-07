document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
            }
        });
    });

    // Project slider
    const projectSlider = document.getElementById('project-slider');
    const projectTabs = document.getElementById('project-tabs');
    const projects = [
        { image: './Images/Screenshot 2024-09-26 115415.png', title: 'Innovative AI Solution' },
        { image: './Images/Screenshot 2024-09-26 115415.png', title: 'Quantum Computing Research' },
        { image: './Images/Screenshot 2024-09-26 115415.png', title: 'Sustainable Tech Initiative' },
    ];

    projects.forEach((project, index) => {
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add(index === 0 ? 'active' : 'hidden');
        projectSlider.appendChild(img);

        const tab = document.createElement('button');
        tab.classList.add(index === 0 ? 'active' : '');
        tab.addEventListener('click', () => switchProject(index));
        projectTabs.appendChild(tab);
    });

    function switchProject(index) {
        projectSlider.querySelectorAll('img').forEach((img, i) => {
            img.classList.toggle('active', i === index);
            img.classList.toggle('hidden', i !== index);
        });
        projectTabs.querySelectorAll('button').forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
    }

    // ... Previous JavaScript code ...

// Live Auction Functionality
function updateAuction() {
    const projects = ['project1', 'project2', 'project3'];
    
    projects.forEach(project => {
        // Update bid amount
        const bidElement = document.getElementById(`bid-${project}`);
        let currentBid = parseInt(bidElement.textContent);
        currentBid += Math.floor(Math.random() * 100); // Random increase
        bidElement.textContent = currentBid;

        // Update time left
        const timeElement = document.getElementById(`time-${project}`);
        let [minutes, seconds] = timeElement.textContent.split(':').map(Number);
        
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            // Auction ended
            timeElement.textContent = "Ended";
            return;
        }

        timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });
}

setInterval(updateAuction, 1000); // Update every second

function placeBid(project) {
    const bidElement = document.getElementById(`bid-${project}`);
    let currentBid = parseInt(bidElement.textContent);
    let newBid = currentBid + 500; // Increase bid by $500
    bidElement.textContent = newBid;

    // Visual feedback
    bidElement.classList.add('text-neon-pink');
    setTimeout(() => {
        bidElement.classList.remove('text-neon-pink');
    }, 300);
}

// ... Rest of the JavaScript code ...

    // Team slider
    const teamSlider = document.getElementById('team-slider');
    const teamTabs = document.getElementById('team-tabs');
    const teamMembers = [
        { name: 'Alice Johnson', role: 'CEO', image: 'alice.jpg' },
        { name: 'Bob Smith', role: 'CTO', image: 'bob.jpg' },
        { name: 'Carol Williams', role: 'Lead Developer', image: 'carol.jpg' },
    ];

    teamMembers.forEach((member, index) => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('team-member');
        memberDiv.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamSlider.appendChild(memberDiv);

        const tab = document.createElement('button');
        tab.classList.add(index === 0 ? 'active' : '');
        tab.addEventListener('click', () => switchTeamMember(index));
        teamTabs.appendChild(tab);
    });

    function switchTeamMember(index) {
        teamSlider.style.transform = `translateX(-${index * 100}%)`;
        teamTabs.querySelectorAll('button').forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
    }

    // Progress indicator
    const progressIndicator = document.getElementById('progress-indicator');
    const sections = document.querySelectorAll('section');

    function updateProgress() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollPercentage = (scrollPosition / pageHeight) * 100;

        progressIndicator.style.background = `conic-gradient(#00ffff ${scrollPercentage}%, #1a1a1a ${scrollPercentage}%)`;
    }

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    // 3D interactive background for Future Vision section
    const futureInteractive = document.getElementById('future-interactive');
    let scene, camera, renderer, particles;

    function initFuture3D() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, futureInteractive.clientWidth / futureInteractive.clientHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(futureInteractive.clientWidth, futureInteractive.clientHeight);
        futureInteractive.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 5000; i++) {
            vertices.push(THREE.MathUtils.randFloatSpread(2000));
            vertices.push(THREE.MathUtils.randFloatSpread(2000));
            vertices.push(THREE.MathUtils.randFloatSpread(2000));
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({ color: 0x00ffff, size: 2 });
        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        camera.position.z = 1000;

        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.x += 0.001;
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
        }
        animate();
    }

    initFuture3D();

    // Responsive 3D background
    window.addEventListener('resize', () => {
        if (renderer) {
            camera.aspect = futureInteractive.clientWidth / futureInteractive.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(futureInteractive.clientWidth, futureInteractive.clientHeight);
        }
    });

    // Mouse interaction with 3D background
    futureInteractive.addEventListener('mousemove', (event) => {
        const rect = futureInteractive.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        particles.rotation.y = (mouseX / futureInteractive.clientWidth - 0.5) * 2;
        particles.rotation.x = (mouseY / futureInteractive.clientHeight - 0.5) * 2;
    });
});

