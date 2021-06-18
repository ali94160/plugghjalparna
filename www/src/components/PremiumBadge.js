import React from 'react'
import '../style/PremiumBadge.css'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';


const PremiumBadge = () => {

  return (

    <div className="premiumDiv">
      <div>
        <div className="premiumBorder">
          <GradeRoundedIcon style={{fontSize: '20px',margin: '1px', color: 'gold',top: '1px', position: 'relative' }} /><span> Premium</span>
        </div>
      </div>
    </div>

  );

}

export default PremiumBadge;