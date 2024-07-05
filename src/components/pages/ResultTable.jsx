import React from 'react'
import DataTable from 'react-data-table-component'
import './ResultTable.css'
 export const ResultTable = () => {
  const columns=[
    {
      name: 'Organs',
      selector: row => row.organs,
      sortable: true
    },
    {
      name:'Probability',
      selector: row => row.probability,
      sortable: true
    }
  ]
  const data=[
    {
      id:1,
      organs:'Kidney',
      probability: '%'
    },
    {
      id:2,
      organs:'Liver',
      probability: '%'
    },
    {
      id:3,
      organs:'Balder',
      probability: '%'
    },
    {
      id:4,
      organs:'Brain',
      probability: '%'
    },
    {
      id:5,
      organs:'Knuckle',
      probability: '%'
    },
    {
      id:6,
      organs:'Arm',
      probability: '%'
    }
  ]
  return (
   <div>
    <div className='table-container'>
     <DataTable 
     columns={columns}
     data={data}
     fixedHeader
     
     customStyles={{
      // Custom styles object for further customization
      headRow: {
        style: {
          backgroundColor: '#fff', // Background color of header row
        },
      },
      headCells: {
        style: {
          fontSize: '18px', // Font size of header cells
          fontWeight: 'bold', // Font weight of header cells
          color: '#8926B6', // Text color of header cells
       justifyContent:'center'
        },
      },
      rows: {
        style: {
          backgroundColor: '#E7DDFF', // Background color of rows
          fontSize: '14px', // Font size of rows
          color: '#8926B6', // Text color of rows
          fontWeight: 'bold',
        },
      },
    }}
    customTheme={{
      // Custom theme object for further customization
      stripes: {
        // Background color of striped rows
        default: '#f0f0f0',
        selected: '#ddd',
      },
    }}
  
     >
     </DataTable>
  </div>
  </div>
  )
}

