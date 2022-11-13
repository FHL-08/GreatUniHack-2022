// root
export interface League {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
    flag: string;
  };
  seasons: {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
}

export interface Fixture {
  fixture: {
    id: number;
    referee: any;
    timezone: string;
    date: string;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
    halftime: {
      home: number;
      away: number;
    };
    fulltime: {
      home: number;
      away: number;
    };
    extratime: {
      home: number;
      away: number;
    };
    penalty: {
      home: number;
      away: number;
    };
  };
}

export interface Statistic {
  id: number
  data: Array<{
    team: {
      id: number
      name: string
      logo: string
    }
    statistics: Array<{
      type: string
      value: any
    }>
  }>
}

export type Player = {
  player: {
    id: number
    name: string
    firstname: string
    lastname: string
    age: number
    birth: {
      date: string
      place: string
      country: string
    }
    nationality: string
    height: string
    weight: string
    injured: boolean
    photo: string
  }
  statistics: Array<{
    team: {
      id: number
      name: string
      logo: string
    }
    league: {
      id: number
      name: string
      country: string
      logo: string
      flag: string
      season: number
    }
    games: {
      appearences: any
      lineups: any
      minutes: any
      number: any
      "posit{ion": string
      rating: any
      captain: boolean
    }
    substitutes: {
      in: any
      out: any
      bench: any
    }
    shots: {
      total: any
      on: any
    }
    goals: {
      total: any
      conceded: any
      assists: any
      saves: any
    }
    passes: {
      total: any
      key: any
      accuracy: any
    }
    tackles: {
      total: any
      blocks: any
      interceptions: any
    }
    duels: {
      total: any
      won: any
    }
    dribbles: {
      attempts: any
      success: any
      past: any
    }
    fouls: {
      drawn: any
      committed: any
    }
    cards: {
      yellow: any
      yellowred: any
      red: any
    }
    penalty: {
      won: any
      commited: any
      scored: any
      missed: any
      saved: any
    }
  }>
}
