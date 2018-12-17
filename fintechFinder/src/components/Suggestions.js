import React from 'react'

const Suggestions = (props) => {
  const options = props.results.map(r => {
  	if(!r._id){
  		return <li key={r}>{r}</li>
  	}
  	return <li key={r._id.$oid}>      {r.fintech}    </li>
})
  return <ul>{options}</ul>
}

export default Suggestions