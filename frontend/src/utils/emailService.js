import emailjs from '@emailjs/browser';

// EMAILJS CREDENTIALS
const SERVICE_ID = 'service_z537ml8';
const TEMPLATE_ID = 'template_ilpqj1p';
const PUBLIC_KEY = 'PQ-5mFFywKKQXtjz3';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

// Main function to send order confirmation
export const sendOrderConfirmation = async (orderData) => {
    try {
        const templateParams = {
            customerName: orderData.customerName,
            customerEmail: orderData.customerEmail,
            orderId: orderData.orderId,
            total: orderData.total.toFixed(2),
            items: orderData.items.map(item =>
                `${item.name} - Qty: ${item.quantity} - ৳${(item.price * item.quantity).toFixed(2)}`
            ).join('<br>'),  // Use <br> for HTML line breaks
            date: new Date(orderData.date).toLocaleDateString()
        };

        console.log('📧 Sending email with params:', templateParams);

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams
        );

        console.log('✅ Email sent successfully:', response);
        return { success: true, response };
    } catch (error) {
        console.error('❌ Email send failed:', error);
        return { success: false, error: error.message };
    }
};

// Generic email sending function
export const sendEmail = async (emailData) => {
    const { to, subject, message } = emailData;

    try {
        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                customerEmail: to,
                subject: subject,
                message: message
            }
        );

        return { success: true, response };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error: error.message };
    }
};