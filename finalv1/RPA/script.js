document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('product-search');
    const searchBtn = document.getElementById('search-btn');
    const logArea = document.getElementById('log');
    const results = document.getElementById('results');
    const bestDeal = document.getElementById('best-deal');
    const allResults = document.getElementById('all-results');

    searchBtn.addEventListener('click', () => {
        const product = searchInput.value.trim();
        if (product === '') {
            alert('Please enter a product name.');
            return;
        }

        // Clear previous results
        logArea.innerHTML = '';
        results.classList.add('hidden');
        bestDeal.innerHTML = '';
        allResults.innerHTML = '';

        // Start RPA process
        rpaProcess(product);
    });

    async function rpaProcess(product) {
        log(`Starting RPA process for product: ${product}`);
        
        const sites = ['Amazon', 'eBay', 'Flipkart', 'Myntra'];
        const searchResults = [];

        for (let site of sites) {
            log(`Searching on ${site}...`);
            await simulateDelay(1000);
            const result = simulateSearch(product, site);
            searchResults.push(result);
            log(`Found: ${result.name} - Price: $${result.price.toFixed(2)} - Rating: ${result.rating}/5.0`);
        }

        log('Comparing results...');
        await simulateDelay(1000);

        const bestDealProduct = findBestDeal(searchResults);
        log(`Best deal found: ${bestDealProduct.name} from ${bestDealProduct.site}`);

        displayResults(searchResults, bestDealProduct);
        results.classList.remove('hidden');
    }

    function simulateSearch(product, site) {
        const price = (Math.random() * 100 + 50).toFixed(2);
        const rating = (Math.random() * 2 + 3).toFixed(1);
        return {
            site: site,
            name: `${product} - ${site} Edition`,
            price: parseFloat(price),
            rating: parseFloat(rating)
        };
    }

    function findBestDeal(results) {
        return results.sort((a, b) => {
            if (b.rating === a.rating) {
                return a.price - b.price;
            }
            return b.rating - a.rating;
        })[0];
    }

    function displayResults(results, bestDealProduct) {
        bestDeal.innerHTML = `
            <h3>Best Deal:</h3>
            <div class="product best-deal">
                <h4>${bestDealProduct.name}</h4>
                <p>Price: $${bestDealProduct.price.toFixed(2)}</p>
                <p>Rating: ${bestDealProduct.rating}/5.0</p>
                <p>Site: ${bestDealProduct.site}</p>
                <a href="https://www.${bestDealProduct.site.toLowerCase()}.com/s?k=${encodeURIComponent(searchInput.value)}" target="_blank">View on ${bestDealProduct.site}</a>
            </div>
        `;

        results.forEach(product => {
            allResults.innerHTML += `
                <div class="product">
                    <h4>${product.name}</h4>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <p>Rating: ${product.rating}/5.0</p>
                    <p>Site: ${product.site}</p>
                    <a href="https://www.${product.site.toLowerCase()}.com/s?k=${encodeURIComponent(searchInput.value)}" target="_blank">View on ${product.site}</a>
                </div>
            `;
        });
    }

    function log(message) {
        const timestamp = new Date().toLocaleTimeString();
        logArea.innerHTML += `[${timestamp}] ${message}\n`;
        logArea.scrollTop = logArea.scrollHeight;
    }

    function simulateDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
});
