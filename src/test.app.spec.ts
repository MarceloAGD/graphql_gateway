import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLModule } from '@nestjs/graphql';
import { AppModule } from './app.module';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';

describe('AppModule', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('test_happy_path_imports', () => {
    expect(IntrospectAndCompose).toBeDefined();
    expect(ApolloGatewayDriver).toBeDefined();
    expect(module).toBeDefined();
    expect(GraphQLModule).toBeDefined();
});
  it('test_compose_multiple_subgraphs', () => {
    expect(() => {
      GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
        driver: ApolloGatewayDriver,
        gateway: {
          supergraphSdl: new IntrospectAndCompose({
            subgraphs: [
              { name: 'users', url: 'http://localhost:4001/graphql' },
              { name: 'playlists', url: 'http://localhost:4002/graphql' },
              { name: 'movies', url: 'http://localhost:4003/graphql' },
            ],
          }),
        },
      });
    }).not.toThrow();
  });
});
