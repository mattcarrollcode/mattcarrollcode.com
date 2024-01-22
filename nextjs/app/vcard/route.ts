export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lastName = searchParams.get('lastName');
  const firstName = searchParams.get('firstName');
  const tel = searchParams.get('tel');
  const email = searchParams.get('email');
  const website = searchParams.get('website');
  
  if (!lastName || !firstName || !tel || !email || !website ) {
    return new Response('', {
      status: 400
    })
  }

  const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName};;;\nTEL:${tel}\nEMAIL;INTERNET:${email}\nURL:${website}\nEND:VCARD`
  return new Response(vCard, {
    status: 200,
    headers: { "Content-type": "text/x-vcard; charset=utf-8" }
  })
}
