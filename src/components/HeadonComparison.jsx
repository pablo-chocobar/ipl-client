
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function HeadonComparison({ data }) {
  return (
    <section className="my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24">
      <h2 className="text-3xl font-extrabold font-PlayfairDisplay mb-4">Head-to-Head</h2>
      <Card className="overflow-x-auto">
        <CardContent className="px-0 py-0">
          <table className="w-full text-sm text-center text-content">
            <thead className="text-xs bg-primary text-content uppercase">
              <tr>
                {Object.keys(data).map((key) => (
                  <th key={key} scope="col" className="px-2 py-3 text-center">
                    {key.replaceAll("_", " ")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(data).map((value, index) => (
                  <td
                    key={index}
                    className={`px-2 py-4 text-center ${index === 0 || index === 2 || index === 4 || index === 6 ? 'bg-primary font-medium' : ''}`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </section>
  )
}