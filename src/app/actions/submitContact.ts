'use server'

export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    company: formData.get('company') as string,
    businessType: formData.get('businessType') as string,
    jobFunction: formData.get('jobFunction') as string,
    interest: formData.get('interest') as string,
  }

  // TODO: Wire up Resend/Nodemailer to send to info@genflat.com
  // For now, log submission
  console.log('Contact form submission:', data)

  return { success: true }
}
