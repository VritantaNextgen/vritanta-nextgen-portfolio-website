// Loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    gsap.to(loadingScreen, { opacity: 0, duration: 0.5, onComplete: () => loadingScreen.style.display = 'none' });
});

// Navigation
const navItems = document.querySelectorAll('.sidebar li');
const dashboards = document.querySelectorAll('.dashboard');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.querySelector('a').getAttribute('href').substring(1);
        
        navItems.forEach(navItem => navItem.classList.remove('active'));
        item.classList.add('active');
        
        dashboards.forEach(dashboard => {
            dashboard.classList.remove('active');
            if (dashboard.id === targetId) {
                dashboard.classList.add('active');
                gsap.from(dashboard, { opacity: 0, y: 20, duration: 0.5 });
            }
        });
    });
});

// Animate KPI values
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

animateValue(document.getElementById("projectsCompleted"), 0, 1234, 2000);
animateValue(document.getElementById("processesAutomated"), 0, 567, 2000);

// Charts
function createChart(id, type, labels, data, label) {
    const ctx = document.getElementById(id).getContext('2d');
    return new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                borderColor: '#00aaff',
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

// BI Dashboard Charts
createChart('industryChart', 'doughnut', ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'], [30, 25, 20, 15, 10], 'Industry Distribution');
createChart('timelineChart', 'line', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], [65, 59, 80, 81, 56, 55], 'Projects Completed');

// RPA Dashboard Charts
createChart('timeSavedChart', 'bar', ['Process 1', 'Process 2', 'Process 3', 'Process 4', 'Process 5'], [120, 80, 60, 100, 90], 'Time Saved (hours)');
createChart('costSavingsChart', 'line', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], [10000, 15000, 18000, 25000, 30000, 35000], 'Cost Savings ($)');

// Digital Marketing Dashboard Charts
createChart('socialMediaChart', 'bar', ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'], [5000, 3000, 7000, 2000], 'Engagements');
createChart('leadConversionChart', 'line', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], [100, 120, 150, 180, 200, 220], 'Leads Converted');
createChart('campaignROIChart', 'bar', ['Campaign 1', 'Campaign 2', 'Campaign 3', 'Campaign 4'], [250, 180, 300, 220], 'ROI (%)');

// Web Development Dashboard Charts
createChart('performanceChart', 'line', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], [95, 92, 98, 96, 97, 99, 98], 'Performance Score');
createChart('deviceUsageChart', 'doughnut', ['Desktop', 'Mobile', 'Tablet'], [60, 30, 10], 'Device Usage');
createChart('pageViewsChart', 'bar', ['Home', 'Products', 'About', 'Contact', 'Blog'], [5000, 3000, 2000, 1500, 2500], 'Page Views');

// Client Satisfaction Meter
const satisfactionMeter = document.getElementById('satisfactionMeter');
const satisfactionValue = document.createElement('div');
satisfactionValue.classList.add('meter-value');
satisfactionMeter.appendChild(satisfactionValue);
gsap.to(satisfactionValue, { width: '85%', duration: 1.5, ease: 'power2.out' });

// Bot Status
const botStatus = document.getElementById('botStatus');
const botStatuses = [
    { name: 'Bot 1', status: 'active' },
    { name: 'Bot 2', status: 'active' },
    { name: 'Bot 3', status: 'inactive' },
    { name: 'Bot 4', status: 'active' }
];

botStatuses.forEach(bot => {
    const statusItem = document.createElement('div');
    statusItem.classList.add('status-item', `status-${bot.status}`);
    statusItem.textContent = bot.name;
    botStatus.appendChild(statusItem);
});

// Keyword Cloud
const keywordCloud = document.getElementById('keywordCloud');
const keywords = ['SEO', 'PPC', 'Content Marketing', 'Social Media', 'Email', 'Analytics', 'CRO', 'Branding'];

keywords.forEach(keyword => {
    const keywordElement = document.createElement('span');
    keywordElement.classList.add('keyword');
    keywordElement.textContent = keyword;
    keywordCloud.appendChild(keywordElement);
    
    gsap.from(keywordElement, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        delay: Math.random() * 0.5,
        ease: 'back.out(1.7)'
    });
});

// Bounce Rate Meter
const bounceRateMeter = document.getElementById('bounceRateMeter');
const bounceRateValue = document.createElement('div');
bounceRateValue.classList.add('meter-value');
bounceRateMeter.appendChild(bounceRateValue);
gsap.to(bounceRateValue, { width: '35%', duration: 1.5, ease: 'power2.out' });

// Add hover animations to reports
const reports = document.querySelectorAll('.report');
reports.forEach(report => {
    report.addEventListener('mouseenter', () => {
        gsap.to(report, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    });
    report.addEventListener('mouseleave', () => {
        gsap.to(report, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
});
