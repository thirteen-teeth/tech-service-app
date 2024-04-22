import React from 'react';
import strawhat from './strawhat.png';
import './App.css';

// Define the ServiceOffering interface
interface ServiceOffering {
  id: number;
  icon: string;
  serviceName: string;
  description: string;
  owner: string;
  url: string;
}

const serviceOfferings: ServiceOffering[] = [
  {
    id: 1,
    icon: strawhat,
    serviceName: 'Web Development',
    description: 'Home Depot, where stuff gets done!',
    owner: 'myTeamName',
    url: 'http://www.freerealesate.com',
  },
  {
    id: 2,
    icon: strawhat,
    serviceName: 'Mobile App Development',
    description: 'Creating innovative mobile applications for Android and iOS.',
    owner: 'YourTeamName',
    url: 'https://www.google.com',
  },
  {
    id: 2,
    icon: strawhat,
    serviceName: 'Mobile App Development',
    description: 'Creating innovative mobile applications for Android and iOS.',
    owner: 'WICKED COOL TEAM',
    url: 'https://www.youtube.com/watch?v=cd4-UnU8lWY',
  },
  // Add more service offerings as needed
];

const otherServiceOfferings: ServiceOffering[] = [
  {
    id: 1,
    icon: strawhat,
    serviceName: 'Opensearch',
    description: 'You know, for search!',
    owner: 'myTeamName',
    url: 'http://www.freerealesate.com',
  },
  {
    id: 2,
    icon: strawhat,
    serviceName: 'Clickhouse',
    description: 'Wicked fast compression! There once was a man who was named Clickhouse, he was wicked fast!',
    owner: 'myTeamName',
    url: 'http://www.freerealesate.com',
  },
]
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tech Company Service Offerings</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className='column-width'>Service Name</th>
            <th className='column-width'>Description</th>
            <th className='column-width'>Owner</th>
            <th className='column-width'>URL</th>
          </tr>
        </thead>
        <tbody>
          {serviceOfferings.map((service) => (
            <tr key={service.id}>
              <td>
                <img src={service.icon} alt="icon" />
              </td>
              <td>{service.serviceName}</td>
              <td>{service.description}</td>
              <td>{service.owner}</td>
              <td>
                <a href={service.url}>
                  {service.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Other Service</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th className='column-width'>Service Name</th>
            <th className='column-width'>Description</th>
            <th className='column-width'>Owner</th>
            <th className='column-width'>URL</th>
          </tr>
        </thead>
        <tbody>
          {otherServiceOfferings.map((service) => (
            <tr key={service.id}>
              <td>
                <img src={service.icon} alt="icon" />
              </td>
              <td>{service.serviceName}</td>
              <td>{service.description}</td>
              <td>{service.owner}</td>
              <td>
                <a href={service.url}>
                  {service.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
