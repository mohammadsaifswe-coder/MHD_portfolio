import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export const handleUniversalSubmit = async ({
    e,
    formData,
    setFormData,
    setIsSubmitting,
    initialState,
    formName,
    onSuccess
}) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending your enquiry...');
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
        const templateParams = {
            name: formData.name,
            email: formData.email,
            service: formData.service,
            budget: formData.budget,
            details: formData.details,
            source: formName,
        };
        // console.log("templateParams--->",templateParams)
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

        if (response.status === 200) {
            toast.success('Message sent successfully!', { id: loadingToast });
            setFormData(initialState); 
            if (onSuccess) onSuccess();
        }
    } catch (error) {
        console.error("EmailJS Error:", error);
        alert(error?.text || "Failed to send message. Please try again.");
    } finally {
        setIsSubmitting(false);
    }
};