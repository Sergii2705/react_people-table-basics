import cn from 'classnames';
import { Person } from '../../types/Person';
import { PersonLink } from '../PersonLink';

interface Props {
  people: Person[],
  slug: string,
}

export const PeopleTable: React.FC<Props> = ({
  people,
  slug,
}) => (
  <table
    data-cy="peopleTable"
    className="table is-striped is-hoverable is-narrow is-fullwidth"
  >
    <thead>
      <tr>
        <th>Name</th>
        <th>Sex</th>
        <th>Born</th>
        <th>Died</th>
        <th>Mother</th>
        <th>Father</th>
      </tr>
    </thead>
    <tbody>
      {people.map(person => (
        <tr
          data-cy="person"
          className={cn({ 'has-background-warning': slug === person.slug })}
          key={person.slug}
        >
          <td>
            <PersonLink person={person} />
          </td>
          <td>{person.sex}</td>
          <td>{person.born}</td>
          <td>{person.died}</td>
          <td>
            {person.mother ? (
              <PersonLink person={person.mother} />
            ) : person.motherName || '-'}
          </td>
          <td>
            {person.father ? (
              <PersonLink person={person.father} />
            ) : person.fatherName || '-'}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);