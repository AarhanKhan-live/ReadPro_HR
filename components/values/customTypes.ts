export type LEAD_TYPE =
  | 'INTERESTED'
  | 'FRESH'
  | 'FOLLOWUP'
  | 'MISSED'
  | 'CALLBACK'
  | 'WON'
  | 'SEARCH';

export type FETCH_LEAD_SATGE =
  | ['FRESH']
  | ['INTERESTED']
  | ['CALLBACK']
  | ['INTERESTED', 'CALLBACK']
  | ['WON'];
