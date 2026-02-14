
const service_id = 'service_xeorsoh';
const template_id = 'template_cv363oc';
const user_id = 'gf5CKBWCl15T1ZvJE'; // public key

async function testEmail() {
    console.log('Sending test email via REST API directly...');

    const data = {
        service_id: service_id,
        template_id: template_id,
        user_id: user_id,
        template_params: {
            name: 'Debug Test',
            email: 'debug@test.com',
            message: 'This is a test from the node script to check API keys.'
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const text = await response.text();
        console.log(`Status: ${response.status}`);
        console.log(`Response Body: "${text}"`);

        if (response.ok) {
            console.log('SUCCESS! The keys appear to work.');
        } else {
            console.log('FAILURE! The keys or account settings are wrong.');
            if (text.includes("The user_id param")) {
                console.log("-> It seems the Public Key (user_id) is invalid.");
            } else if (text.includes("service_id")) {
                console.log("-> Service ID is invalid.");
            } else if (text.includes("template_id")) {
                console.log("-> Template ID is invalid.");
            }
        }
    } catch (error) {
        console.error('Network Error:', error);
    }
}

testEmail();
