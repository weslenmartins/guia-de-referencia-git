import siteSetup from '../../../utils/setup'

export default async (req, res) => {
  const API = await fetch(`${siteSetup.api}/git`)
  const data = await API.json()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  res.json(data)
}
