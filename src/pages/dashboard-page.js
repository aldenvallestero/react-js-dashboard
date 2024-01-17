import { useEffect, useState } from 'react'
import { Widget } from '../components/widget-component'

const DashboardPage = () => {
  const [configs, setConfigs] = useState()

  useEffect(() => {
    setConfigs({
      columns: [
        {
          size: 4,
          heading: 'General Pokemon Information',
          widgets: [
            {
              title: 'Pokemon Colours',
              subtitle: 'List of all the colours',
              type: 'list',
              api: 'https://pokeapi.co/api/v2/pokemon-color/'
            },
            {
              title: 'Pokemon Gender',
              subtitle: 'List of all the genders',
              type: 'list',
              api: 'https://pokeapi.co/api/v2/gender/'
            }
          ]
        },
        {
          size: 2,
          heading: 'Pokemon counts',
          widgets: [
            {
              title: 'Genderless count',
              type: 'number',
              api: 'https://pokeapi.co/api/v2/gender/3/'
            },
            {
              title: 'Female count',
              type: 'number',
              api: 'https://pokeapi.co/api/v2/gender/1/'
            },
            {
              title: 'Male count',
              type: 'number',
              api: 'https://pokeapi.co/api/v2/gender/2/'
            }
          ]
        }
      ]
    })
  }, [])

  return (
    <div className="container-fluid grid grid-cols-6 p-6">
      {
        configs?.columns.map(col => (
          <div className={`col-span-${col.size} mx-4`}>
            <h1 className="text-xl font-bold">{col.heading}</h1>
            {
              col.widgets.map(widget => (
                <Widget data={widget} />
              ))
            }
          </div>
        ))
      }

    </div>
  )
}

export default DashboardPage
