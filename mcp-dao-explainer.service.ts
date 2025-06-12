import {Injectable, Logger} from '@nestjs/common';
import {gql, GraphQLClient} from 'graphql-request';
import {OrganizationsResponse, OrganizationsInput} from './dto/params'


@Injectable()
export class McpDaoExplainerService {
    private readonly logger = new Logger(McpDaoExplainerService.name);
    private client: GraphQLClient;

    constructor() {
        this.client = new GraphQLClient(
            "https://api.tally.xyz/query",
            {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": `${process.env.TALLY_API_KEY}`,
                },
            }
        );
    }

    public async listDaos(params?: Record<string, any>): Promise<any> {

        const LIST_DAOS_QUERY = gql`
  query Organizations($input: OrganizationsInput!) {
    organizations(input: $input) {
      nodes {
        ... on Organization {
          id
          slug
          name
          chainIds
          tokenIds
          governorIds
          metadata {
            description
            icon
            socials {
              website
              discord
              twitter
            }
          }
          hasActiveProposals
          proposalsCount
          delegatesCount
          delegatesVotesCount
          tokenOwnersCount
        }
      }
      pageInfo {
        firstCursor
        lastCursor
      }
    }
  }
`;

        const input: OrganizationsInput = {
            sort: {
                sortBy: "popular",
                isDescending: true
            },
            page: {
                limit: 20
            }
        };
        try {
            const response = await this.client.request<OrganizationsResponse>(LIST_DAOS_QUERY, {input});
            return response;
        } catch (error) {
            throw new Error(`Failed to fetch DAOs: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}
