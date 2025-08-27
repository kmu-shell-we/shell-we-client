import Auth from '@/api/controller/auth';
import Item from '@/api/controller/item';
import Mission from '@/api/controller/mission';
import Schedule from '@/api/controller/schedule';
import Score from '@/api/controller/score';
import Season from '@/api/controller/season';
import Team from '@/api/controller/team';
import TeamMember from '@/api/controller/teamMember';
import User from '@/api/controller/user';
import ApiRequest from '@/api/request';

export default class Api {
  private static instance: Api | null = null;

  private readonly request = new ApiRequest();

  private readonly domain = {
    Auth: new Auth(),
    Item: new Item(this.request),
    Mission: new Mission(this.request),
    Schedule: new Schedule(this.request),
    Score: new Score(this.request),
    Season: new Season(this.request),
    Team: new Team(this.request),
    TeamMember: new TeamMember(this.request),
    User: new User(this.request),
  };

  private constructor() {
    Api.instance = this;
  }

  private static get Instance(): Api {
    if (Api.instance === null) {
      Api.instance = new Api();
    }

    return Api.instance!;
  }

  public static get Request(): ApiRequest {
    return Api.Instance.request;
  }

  public static get Domain() {
    return Api.Instance.domain;
  }
}
