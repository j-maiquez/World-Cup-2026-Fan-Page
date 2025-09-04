// Dark Mode
let themeBtn = document.querySelector("#theme-button");

if (themeBtn) {
    const toggleDarkMode = () => {
        document.body.classList.toggle("dark-mode");
    }
    themeBtn.addEventListener("click", toggleDarkMode);
}

// Step 1: Get the submit button
let rsvpButton = document.querySelector("#rsvp-button");
let rsvpCount = 0;

// Step 2: Create the function to add participants
const addParticipant = (event, person) => {
    event.preventDefault;
    
    // Get the form inputs
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let stateInput = document.querySelector("#state");
    let teamInput = document.querySelector("#favorite-team");
    
    // Get the values from the inputs
    let name = nameInput.value;
    let email = emailInput.value;
    let state = stateInput.value;
    let team = teamInput.value;
    
    
    // Create a new paragraph element
    let newParticipant = document.createElement("p");
    
    // Add team info if provided, otherwise just name and state
    if (team) {
    let flagEmoji = getCountryFlag(team);
    newParticipant.textContent = `🎟️ ${name} from ${state} (supports ${team} ${flagEmoji}) has RSVP'd.`;
    } else {
    newParticipant.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;
    }   

    function getCountryFlag(teamName) {
    const flags = {
        // Host Countries
        'USA': '🇺🇸', 'United States': '🇺🇸', 'America': '🇺🇸', 'US': '🇺🇸',
        'Canada': '🇨🇦',
        'Mexico': '🇲🇽', 'México': '🇲🇽',

        // South America
        'Brazil': '🇧🇷', 'Brasil': '🇧🇷',
        'Argentina': '🇦🇷',
        'Uruguay': '🇺🇾',
        'Colombia': '🇨🇴',
        'Chile': '🇨🇱',
        'Peru': '🇵🇪', 'Perú': '🇵🇪',
        'Ecuador': '🇪🇨',
        'Paraguay': '🇵🇾',
        'Bolivia': '🇧🇴',
        'Venezuela': '🇻🇪',

        // Europe
        'France': '🇫🇷',
        'Germany': '🇩🇪', 'Deutschland': '🇩🇪',
        'Spain': '🇪🇸', 'España': '🇪🇸',
        'England': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 'UK': '🇬🇧', 'Britain': '🇬🇧', 'United Kingdom': '🇬🇧',
        'Italy': '🇮🇹', 'Italia': '🇮🇹',
        'Netherlands': '🇳🇱', 'Holland': '🇳🇱',
        'Portugal': '🇵🇹',
        'Belgium': '🇧🇪',
        'Croatia': '🇭🇷',
        'Poland': '🇵🇱', 'Polska': '🇵🇱',
        'Switzerland': '🇨🇭',
        'Austria': '🇦🇹',
        'Denmark': '🇩🇰',
        'Sweden': '🇸🇪',
        'Norway': '🇳🇴',
        'Russia': '🇷🇺',
        'Ukraine': '🇺🇦',
        'Czech Republic': '🇨🇿', 'Czechia': '🇨🇿',
        'Serbia': '🇷🇸',
        'Greece': '🇬🇷',
        'Turkey': '🇹🇷',
        'Scotland': '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        'Wales': '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        'Ireland': '🇮🇪',
        'Finland': '🇫🇮',
        'Iceland': '🇮🇸',

        // Asia
        'Japan': '🇯🇵',
        'South Korea': '🇰🇷', 'Korea': '🇰🇷',
        'China': '🇨🇳',
        'India': '🇮🇳',
        'Saudi Arabia': '🇸🇦',
        'Iran': '🇮🇷',
        'Iraq': '🇮🇶',
        'UAE': '🇦🇪', 'United Arab Emirates': '🇦🇪',
        'Qatar': '🇶🇦',
        'Kuwait': '🇰🇼',
        'Thailand': '🇹🇭',
        'Vietnam': '🇻🇳',
        'Malaysia': '🇲🇾',
        'Singapore': '🇸🇬',
        'Indonesia': '🇮🇩',
        'Philippines': '🇵🇭',
        'Australia': '🇦🇺',
        'New Zealand': '🇳🇿',

        // Africa
        'Nigeria': '🇳🇬',
        'Ghana': '🇬🇭',
        'Senegal': '🇸🇳',
        'Morocco': '🇲🇦',
        'Egypt': '🇪🇬',
        'Algeria': '🇩🇿',
        'Tunisia': '🇹🇳',
        'Cameroon': '🇨🇲',
        'South Africa': '🇿🇦',
        'Kenya': '🇰🇪',
        'Ethiopia': '🇪🇹',
        'Ivory Coast': '🇨🇮', 'Côte d\'Ivoire': '🇨🇮',
        'Mali': '🇲🇱',
        'Burkina Faso': '🇧🇫',
        'Guinea': '🇬🇳',
        'Congo': '🇨🇬',
        'Angola': '🇦🇴',

        // North/Central America & Caribbean
        'Jamaica': '🇯🇲',
        'Costa Rica': '🇨🇷',
        'Panama': '🇵🇦',
        'Honduras': '🇭🇳',
        'Guatemala': '🇬🇹',
        'El Salvador': '🇸🇻',
        'Nicaragua': '🇳🇮',
        'Trinidad and Tobago': '🇹🇹',
        'Haiti': '🇭🇹',
        'Dominican Republic': '🇩🇴',
        'Cuba': '🇨🇺',

        // Other Popular Teams
        'Israel': '🇮🇱',
        'Lebanon': '🇱🇧',
        'Jordan': '🇯🇴',
        'Syria': '🇸🇾',
        'Pakistan': '🇵🇰',
        'Bangladesh': '🇧🇩',
        'Sri Lanka': '🇱🇰',
        'Nepal': '🇳🇵',
        'Afghanistan': '🇦🇫',
        'Kazakhstan': '🇰🇿',
        'Uzbekistan': '🇺🇿'
    };
    
    // Case-insensitive search
    const teamKey = Object.keys(flags).find(key => 
        key.toLowerCase() === teamName.toLowerCase()
    );
    
    return flags[teamKey] || '⚽'; // Returns country flag or soccer ball if not found
    }

    // Find the participants div and add the new participant
    let participantsDiv = document.querySelector(".rsvp-participants");
    participantsDiv.appendChild(newParticipant);
    
    // Clear the form
    nameInput.value = "";
    emailInput.value = "";
    stateInput.value = "";
    teamInput.value = "";
}


function validateState(stateName) {
    const usStates = [
        // Full State Names
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 
        'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
        'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
        'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
        'West Virginia', 'Wisconsin', 'Wyoming',
        
        // State Abbreviations
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
        
        // Canadian Provinces/Territories
        'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 
        'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 
        'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 
        'Yukon',
        
        // Canadian Abbreviations
        'AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS', 'NU', 'ON', 'PE', 'QC', 'SK', 'YT',
        
        // Mexican States (Major ones)
        'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 
        'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 
        'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacán', 'Morelos', 
        'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 
        'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 
        'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'
    ];
    
    // Case-insensitive search
    return usStates.some(state => 
        state.toLowerCase() === stateName.toLowerCase()
    );
}

const validateForm = (event) => {
    event.preventDefault();
    
    let containsErrors = false;
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    let person = {
        name: rsvpInputs[0].value,
        email: rsvpInputs[1].value,
        state: rsvpInputs[2].value,
        favteam: rsvpInputs[3].value,
    }

    for (let i = 0; i < person.length; i++){
        if(person[i].value.length < 2){
            containsErrors = true;
            person[i].classList.add('error');
        }
        else {
            person[i].classList.remove('error');
        }
    }

    // Email validation
    let emailCheck = document.getElementById("email");
    if(!emailCheck.value.includes("@") || !emailCheck.value.includes(".")){
        containsErrors = true;
        emailCheck.classList.add('error');
        alert("Please enter a valid email address with @ and a domain (e.g., user@example.com)");
    }else{
        emailCheck.classList.remove('error');
    }

    // State validation - ADD THIS
    let stateCheck = document.getElementById("state");
    if(!validateState(stateCheck.value)){
        containsErrors = true;
        stateCheck.classList.add('error');
        alert("Please enter a valid US state, Canadian province, or Mexican state (e.g., California, Ontario, Jalisco)");
    }else{
        stateCheck.classList.remove('error');
    }

    if(containsErrors == false) {
        addParticipant(person);
        toggleModal(person);
        
        // Update counter
        rsvpCount++;
        let counterElement = document.getElementById("rsvp-count");
        if(rsvpCount == 1){
            counterElement.textContent = `⭐ ${rsvpCount} person has RSVP'd to this event!`;
        }else if(rsvpCount > 9){
            counterElement.textContent = `⭐⭐⭐ IT'S A PARTY NOW! ⭐⭐⭐`;
    }   else{
            counterElement.textContent = `⭐ ${rsvpCount} people have RSVP'd to this event!`;
        }
        
        // Clear form
        for (let i = 0; i < person.length; i++){
            person[i].value = "";
        }
    }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
if (rsvpButton) {
    rsvpButton.addEventListener("click", validateForm);
}


// Countdown Timer
function updateCountdown() {
    const tournamentDate = new Date('June 11, 2026 12:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = tournamentDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '000';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Animation variables
let rotateFactor = 0;
let modalImage = document.getElementById("modal-image");

// Animation function
const animateImage = () => {
    if (rotateFactor === 0) {
        rotateFactor = -10;
    } else {
        rotateFactor = 0;
    }
    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalText = document.getElementById("modal-text");
    
    // Show modal
    modal.style.display = "flex";
    
    // Update modal text with personalized message
    modalText.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the 2026 World Cup! 🏆`;
    
    // Start image animation and store interval globally
    window.currentModalInterval = setInterval(animateImage, 500);
    
    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(window.currentModalInterval);
    }, 5000);
}

// Select close button
let closeModalBtn = document.getElementById("close-modal-btn");

// Function to close modal
const closeModal = () => {
    let modal = document.getElementById("success-modal");
    modal.style.display = "none";
    // Clear animation if it's running
    if (window.currentModalInterval) {
        clearInterval(window.currentModalInterval);
    }
}

// Add event listener to close button
closeModalBtn.addEventListener("click", closeModal);