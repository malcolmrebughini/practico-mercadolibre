import React from 'react';
import styles from './style.scss';


class Breadcrumbs extends React.PureComponent {
  render = () => {
    return (
      <div className={styles.container}>
        { this.props.list.map((value, index, array) => {
            return (
              <span className={styles.breadCrumb} key={`breadCrumb-${index}`}>
                { array.length !== index + 1 ? `${value} > ` : value }
              </span>
            )
          })
        }
      </div>
    )
  }
}


export default Breadcrumbs;
