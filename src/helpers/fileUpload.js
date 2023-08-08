export const fileUpload = async (file) => {
  if (!file) throw new Error('File is required')
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dlomynswh/image/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'journal-app')
  formData.append('file', file)

  const res = await fetch(cloudUrl, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) throw new Error('Error uploading file')

  const cloudRes = await res.json()
  return cloudRes.secure_url
}
