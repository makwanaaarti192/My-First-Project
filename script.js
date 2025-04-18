// Common functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize pages
    if (document.getElementById('bookingForm')) {
        initBookingPage();
    }
    
    if (document.getElementById('scheduleTable')) {
        initSchedulePage();
    }
    
    if (document.getElementById('checkPnr')) {
        initPnrPage();
    }
    
    if (document.getElementById('contactForm')) {
        initContactPage();
    }
});

// Booking Page
function initBookingPage() {
    const bookingForm = document.getElementById('bookingForm');
    const trainResults = document.getElementById('trainResults');
    const trainsList = document.getElementById('trainsList');
    
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const date = document.getElementById('date').value;
        const travelClass = document.getElementById('class').value;
        
        // Show results
        showTrainResults(from, to, date, travelClass);
        trainResults.classList.remove('hidden');
    });
    
    function showTrainResults(from, to, date, travelClass) {
        // Sample train data
        const trains = [
            {
                number: '12345',
                name: 'Express Train',
                departure: '08:00',
                arrival: '12:00',
                price: getPrice(travelClass)
            },
            {
                number: '67890',
                name: 'Superfast Train',
                departure: '14:00',
                arrival: '18:00',
                price: getPrice(travelClass) + 100
            }
        ];
        
        // Display trains
        trainsList.innerHTML = '';
        trains.forEach(train => {
            const trainDiv = document.createElement('div');
            trainDiv.className = 'train';
            trainDiv.innerHTML = `
                <h4>${train.name} (${train.number})</h4>
                <p>${from} to ${to} | Dep: ${train.departure} | Arr: ${train.arrival}</p>
                <p>Class: ${getClassName(travelClass)} | Price: ₹${train.price}</p>
                <button class="btn">Book Now</button>
            `;
            trainsList.appendChild(trainDiv);
        });
    }
    
    function getPrice(travelClass) {
        const prices = {
            'SL': 300,
            '3A': 600,
            '2A': 900
        };
        return prices[travelClass] || 0;
    }
    
    function getClassName(code) {
        const classes = {
            'SL': 'Sleeper',
            '3A': 'AC 3 Tier',
            '2A': 'AC 2 Tier'
        };
        return classes[code] || code;
    }
}

// Schedule Page
function initSchedulePage() 
{
    const scheduleTable = document.getElementById('scheduleTable');
    
    // Sample schedule data
    const schedule = [
        {
            number: '12345',
            name: 'Express Train',
            from: 'Delhi',
            to: 'Mumbai',
            departure: '08:00',
            arrival: '20:00'
        },
        {
            number: '67890',
            name: 'Superfast Train',
            from: 'Mumbai',
            to: 'Delhi',
            departure: '14:00',
            arrival: '06:00'
        },
        {
            number: '54321',
            name: 'Local Train',
            from: 'Chennai',
            to: 'Bangalore',
            departure: '06:00',
            arrival: '12:00'
        }
        
    ];
    
    // Populate table
    schedule.forEach(train => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${train.number}</td>
            <td>${train.name}</td>
            <td>${train.from}</td>
            <td>${train.to}</td>
            <td>${train.departure}</td>
            <td>${train.arrival}</td>
        `;
        scheduleTable.appendChild(row);
    });
}

// PNR Page
function initPnrPage() {
    const checkPnr = document.getElementById('checkPnr');
    const pnrResult = document.getElementById('pnrResult');
    const pnrNumber = document.getElementById('pnrNumber');
    const trainInfo = document.getElementById('trainInfo');
    
    checkPnr.addEventListener('click', function() {
        const pnrInput = document.getElementById('pnrInput').value;
        
        if (pnrInput.length === 10) {
            // Show sample result
            pnrNumber.textContent = pnrInput;
            trainInfo.textContent = 'Express Train (12345) - Delhi to Mumbai';
            pnrResult.classList.remove('hidden');
        } else {
            alert('Please enter a valid 10-digit PNR number');
        }
    });
}

// Contact Page
function initContactPage() {
    const contactForm = document.getElementById('contactForm');
    const thankYou = document.getElementById('thankYou');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real app, send the form data to a server
        contactForm.classList.add('hidden');
        thankYou.classList.remove('hidden');
    });
}