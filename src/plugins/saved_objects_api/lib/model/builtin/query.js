import Joi from 'joi';

/**
 * Schema for query objects.
 */
const QuerySchema = Joi.object().keys({
  title: Joi.string(),
  description: Joi.string().default(null),
  activationQuery: Joi.string(),
  resultQuery: Joi.string(),
  datasourceId: Joi.string(),
  tags: Joi.string(),
  rest_params: Joi.object(),
  rest_headers: Joi.object(),
  rest_variables: Joi.object(),
  rest_body: Joi.string(),
  rest_method: Joi.string(),
  rest_path: Joi.string(),
  rest_resp_status_code: Joi.number(),
  activation_rules: Joi.object(),
  version: Joi.number().integer(),
  kibanaSavedObjectMeta: Joi.object().keys({
    searchSourceJSON: Joi.string()
  })
});

export default QuerySchema;
